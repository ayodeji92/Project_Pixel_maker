$('#sizePicker').submit(function(event){
 event.preventDefault();
 let height = $('#inputHeight').val();
 let width = $('#inputWeight').val();
 makeGrid(height,width);

 });
function makeGrid(r,c) { //row and column
//To create table or grids
 $('tr').remove();
  for(let i = 1; i<=r; i++){ //nested for loop to create table data
     let tr = $('<tr></tr>');
     $('#pixelCanvas').append(tr);
     for(let j = 1; j<=c; j++){
      let td = $('<td></td>');
         tr.append(td);
     } //next column
  } // next row
}
 //add color to the boxes
  $('#pixelCanvas').on('click','td',function(){
  let color = $('#colorPicker').val();
   if ($(this).attr('style')){
    $(this).removeAttr('style');
  }
  else{
    $(this).attr('style','background-color:'+color);
   };
});