// 必要な関数やデータを他のファイルからインポートする
import { baseElements } from './baseElements.js'; // baseElements.jsからbaseElementsをインポート
import { generateUniqueRandomElements } from './generateUniqueRandomElements.js'; // generateUniqueRandomElements.jsから関数をインポート
import { createSelectElements } from './createSelectElements.js'; // createSelectElements.jsから関数をインポート

export let shuffledElements = []; // シャッフルされた要素を格納するための配列を宣言

// ページの初期化を行う関数
export function initPage() {
  // baseElementsを引数にして、ユニークなランダムな要素を生成する関数を呼び出し
  shuffledElements = generateUniqueRandomElements(baseElements);
  // grid要素を選択し、内容を空にする
  let $grid = $('#grid').empty();

  // シャッフルされた要素を一つずつ処理する
  shuffledElements.forEach((element) => {
    // 各要素に対してdiv要素を作成し、クラス名とテキスト、id属性を設定してgridに追加する
    $('<div>').addClass('account-item').text(element.text).attr('id', 'p' + element.id).appendTo($grid);
  });

  // シャッフルされた要素の数だけセレクトボックスを作成する関数を呼び出し
  createSelectElements(shuffledElements.length);
}
