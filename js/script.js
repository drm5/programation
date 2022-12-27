$(function(){

  $('input[type=submit]').click(function(){
    var ta = $('textarea').val().split()
    var code = $('.code')
    code.html('')
    code.html(code.html() + ta)
    return false
  })

  //matrix
  $('input[value=Matrix]').click(function(){
    $('html').css('background-color','black').css('color','green')
    $('body').css('background-color','black').css('color','green')
    $('form').css('background-color','rgb(40, 40, 44)')
    $('textarea').css('background-color','black').css('color','green')
    $('input').css('background-color','black').css('color','green').css('border','1.5px solid green')
    $('input[value=Normal]').fadeIn()
    $('input[value=Matrix]').css('display','none')
  })

  //normal
  $('input[value=Normal]').click(function(){
    $('html').css('background-color','rgb(200, 200, 205)').css('color','black')
    $('body').css('background-color','rgb(200, 200, 205)').css('color','black')
    $('form').css('background-color','rgb(142, 142, 142)')
    $('textarea').css('background-color','white').css('color','black')
    $('input[type=submit]').css('background-color','rgb(30, 123, 177)').css('color','white').css('border','1.7px solid white')
    $('input[value=Limpar]').css('background-color','white').css('color','initial').css('border','1px solid #ccc')
    $('input[value=Matrix]').fadeIn()
    $('input[value=Normal]').css('display','none')
  })
})