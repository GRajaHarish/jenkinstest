<?php

namespace App\Http\Controllers;
use Redirect;
use Hash;
use Illuminate\Http\Request;
use App\Models\AdminUser;
use App\Models\PasswordResetAdmin;
use App\Models\Booking\CustomerBookings;
use App\Models\Customers\Customer;
use App\Models\Booking\BookingSlots;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Notifications;
use Carbon\Carbon;

use Session;
class loginController extends Controller
{



    public function index(){ //returning login page
        return view('auth.login');
    }
    public function registerIndex(){ // returning register page

    $notificationCount = Notifications::where('userID',1)->where('status',0)->where('type',2)->count();
    $creditRequestCount = Notifications::where('userID',1)->where('status',0)->where('type',1)->count();
    $refundRequestCount = Notifications::where('userID',1)->where('status',0)->where('type',2)->count();

        return view('auth.register',compact('notificationCount','creditRequestCount','refundRequestCount'));
    }
    public function adminRegister(){ // returning register page
        // $adminUsers= AdminUser::where('Role','=',1)->first();
        // if(empty($adminUsers)){
            return view('auth.adminRegister');
        // }else{

        //     abort(404);
        // }

    }




    public function registerUser(Request $request){ // User Registration function
        $request->validate([
            'UserName'=>'required',
            'Email'=>'required|Email|unique:admin_users',
            'PhoneNo'=>'required',
            'Role'=>'required',
            'Password'=>'required|min:6',
            'Name'=>'required'


        ]);

        if(isset($request["email"]) && $request["email"] != "")
        {
            $users  = AdminUser::getUserDetailsByEmail($request["email"]);

        }

        if(empty($users)){

            $admin_user_table = new AdminUser;
            $admin_user_table->Name      = $request["Name"];
            $admin_user_table->UserName      = $request["UserName"];
            $admin_user_table->Email      = $request["Email"];
            $admin_user_table->PhoneNo      = $request["PhoneNo"];
            $admin_user_table->Role      = $request["Role"];
            $admin_user_table->AddedDate      = date("Y-m-d");
            $admin_user_table->Status      = 1;
            $admin_user_table->Password      = bcrypt($request["Password"]);


            $admin_user_table->save();

            $Adminuser = AdminUser::latest('AdminUserID')->first();
            $ID=$Adminuser->AdminUserID;
            $Adminuserame=$Adminuser->UserName;
            $Time = now()->format('d-m-Y H:i:s');
            $logData = (object) [
                'ID' => $ID,
                'Timeformat' => now()->format('Y-m-d H:i:s'),
                'activity' => $Adminuserame. " is registered by admin at " . $Time ,
                'log_title' => "Admin",
                'log_section' => "Admin Register",
                'activity_by' => 'Admin',
                'created_at' => now()->format('Y-m-d H:i:s')
            ];

            // calling the Adminstafflog function with required values
            $this->AdminStafflog($logData);

            $insertedId = $admin_user_table->id;
            $adminUserDetails = AdminUser::latest('AdminUserID')->first();

            if($adminUserDetails){
                if($request["Role"] == 1){
                    return Redirect::to('login');
                }else{
                    return Redirect::back()->withErrors(['success' => 'Successfully Registered']);
                }


            }else{

                return Redirect::back()->withErrors(['fail' => 'Attempt Failed']);
            }



        }else{

            return Redirect::back()->withErrors(['fail' => 'This User Exist !!']);

        }


    }

    public function logout(){
        session_start();
        session_destroy();
        Session::flush();
        return Redirect::to('login');
    }
    public function passwordreset(){
        return view('auth.passwords.email');
    }
    public function forgetpassword(Request $request){
        $request->validate([
            'email'=>'email|exists:admin_users,Email'
        ]);
        $token=\Str::random(64);
        \DB::table('password_reset')->insert([
            'email'=>$request->email,
            'token'=>$token,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $action_link=route('password.reset',['token'=>$token,'email'=>$request->email]);
        // $body="We are recieved a request to reset the password for <b> SMASH GOLF </b>account associated with ".$request->email.".
        // You can reset your password by clicking the link below";

        // \Mail::send('email-fotgot',['action_link'=>$action_link ,'body'=>$body],function($message) use($request){
        //  $message->from('testing@gmail.com','testing');
        //  $message->to($request->email,'user')
        //  ->subject('Reset Password');
        // });
        $mailClass = new MailController;
        $mailClass->AdminPasswordReset($request->email,$action_link);
        return back()->with('success','We have E-mailed your password reset link');
    }
    public function ShowResestForm(Request $request,$token=null){
     return view('auth.passwords.reset')->with(['token'=>$token,'email'=>$request->email]);
    }
    public function resetformconfirm(Request $request){
        $request->validate([
            'email'=>'email|exists:admin_users,Email',
            'password'=>'required|min:5|same:password_confirmation',
            'password_confirmation'=>'required|min:5|same:password',
        ]);
        $check_token=\DB::table('password_reset')->where([
            'email'=>$request->email,
            'token'=>$request->token
        ])->first();

      if(!$check_token){
        return back()->withInput()->with('fail','Invalid token');
      }
      else {
        // Get the created_at timestamp from the token record
        $createdAt = Carbon::parse($check_token->created_at);

        // Calculate the time difference in hours
        $hoursDifference = Carbon::now()->diffInHours($createdAt);

        // Check if the token has expired (greater than 24 hours)
        if ($hoursDifference > 24) {
            // Token has expired, show the token expired message
            return back()->withInput()->with('failtoken', 'Token has expired. Please request a new one.');
        } else {
            // Token is valid, reset the password
            AdminUser::where('Email', $request->email)->update([
                'Password' => \Hash::make($request->password)
            ]);

            // Delete the used password reset token
            \DB::table('password_reset')->where([
                'email' => $request->email
            ])->delete();

            // Redirect to the login page with a success message
            return Redirect::to('login')
            ->with('success', 'Password successfully changed. Please login')
            ->with('email', $request->email);
        }
    }

    }
    public function AdminStafflog($logData){
        DB::table('admin_staff_log')->insert([
            'user_id' => $logData->ID,
            'Activity' => $logData->activity,
            'log_title' => $logData->log_title,
            'log_section' => $logData->log_section,
            'ActivityBy' => $logData->activity_by,
            'created_at' => $logData->created_at,
        ]);
    }



}
