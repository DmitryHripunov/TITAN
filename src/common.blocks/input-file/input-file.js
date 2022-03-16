$('input[type="file"]').change(() => {
  const value = $("input[type='file']").val();
  const fileName = value.split('\\').pop();
  console.log(fileName);
  $('.input-file label span').text(fileName);
});
