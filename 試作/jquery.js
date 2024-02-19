import { checkAnswers } from './checkAnswers.js'; // checkAnswers.jsからcheckAnswers関数をインポートする
import { initPage, shuffledElements } from './initPage.js';


$(function() {
  initPage(); // ページの初期化を行い、シャッフルされた要素を取得

  // 「確認」ボタンがクリックされたときのイベントハンドラを設定
  $('#checkButton').click(() => checkAnswers(shuffledElements));

  // 「リセット」ボタンがクリックされたときのイベントハンドラを設定
  $('#resetButton').click(function() {
    initPage(); // ページを再初期化し、シャッフルされた要素を再取得
    $('select').css('color', '#4a4a4a'); // セレクトボックスの色をデフォルトの色にリセット
  });
});
