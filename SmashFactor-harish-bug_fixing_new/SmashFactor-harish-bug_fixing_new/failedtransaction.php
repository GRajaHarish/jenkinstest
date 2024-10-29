<?php 
$content = print_r($_REQUEST, true);
$xml = new SimpleXMLElement(file_get_contents("php://input"));
$xml_data =  $xml->asXML();

$data = "\n Internalid : ".$xml->biller[0]->internalid."\n"."type : ".$xml->event[0]->type."\n";
if(isset($xml->event[0]->content[0]->transactionid)){
    $data = $data."Transactionid: ".$xml->event[0]->content[0]->transactionid."\n";

}
if(isset($xml->event[1]->content[0]->paymentid)){
    $data = $data."paymentid: ".$xml->event[1]->content[0]->paymentid."\n";

}
echo $data;
file_put_contents('./failedlist.txt', $data,FILE_APPEND);
echo file_get_contents('./failedlist.txt');
?>
