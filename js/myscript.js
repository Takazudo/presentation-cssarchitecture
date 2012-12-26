window.listindex = function(highlight) {

  var list = [
    '枠とモジュールで考える',
    'モジュールの一欄を作る',
    'モジュール名の決定',
    'モジュールわけが難しい',
    '余白のルールを設ける',
    'もっと細かく余白を調節したい',
    '便利クラス',
    'OOCSS',
    'jQuery UIのCSS',
    '入れ子になるモジュール'
  ];

  var html = '<ul class="mod-indexlist">'

  for(var i=0, l=list.length; i<l; i++) {
    if(highlight !== undefined && highlight === i) {
      html += '<li class="mod-indexlist-highlight">';
    } else {
      html += '<li>';
    }
    html += list[i] + '</li>';
  }

  html += '</ul>';
  
  document.write(html);

};
