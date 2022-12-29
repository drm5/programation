$(function(){

  //enviar
  $('input[type=submit]').click(function(){
    var ta = $('textarea').val().split()
    var code = $('.code')
    code.html('')
    //lorem
    var l = $('textarea').val().split('lorem')
    var lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit at corporis facere alias nam nisi facilis nobis voluptas error eos explicabo illo eius inventore porro, praesentium architecto optio reiciendis repudiandae!'
    // ---
    if(l.length > 1){
      code.html(code.html()+l[0]+lorem+l[1])
    }else{
      code.html(code.html() + ta)
    }
    return false
  })

  //limpar
  $('input[value=Limpar]').click(function(){
    $('.code').html('')
    $('textarea').val('')
  })

  //matrix
  var bg = 'background-color'
  $('input[value=Matrix]').click(function(){
    $('html').css(bg,'black').css('color','rgb(10, 203, 10)')
    $('body').css(bg,'black').css('color','rgb(10, 203, 10)')
    $('form').css(bg,'rgb(40, 40, 44)')
    $('textarea').css(bg,'black').css('color','rgb(10, 203, 10)')
    $('input').css(bg,'black').css('color','rgb(10, 203, 10)').css('border','1.5px solid rgb(10, 203, 10)')
    $('input[value=Normal]').fadeIn()
    $('input[value=Matrix]').css('display','none')
  })

  //normal
  $('input[value=Normal]').click(function(){
    $('html').css(bg,'white').css('color','black')
    $('body').css(bg,'white').css('color','black')
    $('form').css(bg,'rgb(142, 142, 142)')
    $('textarea').css(bg,'white').css('color','black')
    $('input[type=submit]').css(bg,'rgb(30, 123, 177)').css('color','white').css('border','1.7px solid white')
    $('input[value=Limpar]').css(bg,'white').css('color','initial').css('border','1px solid #ccc')
    $('input[value=Matrix]').fadeIn()
    $('input[value=Normal]').css('display','none')
  })
})