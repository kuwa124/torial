// baseElements.js から関数をインポートします。
import { generateAndExportUniqueRandomElements } from './baseElements.js';

// DOMの読み込みが完了したら実行されるイベントリスナーを追加します。
document.addEventListener('DOMContentLoaded', () => {
  // ユニークでランダムな要素の配列を取得します。
  const elements = generateAndExportUniqueRandomElements();

  // gridコンテナのDOM要素を取得します。
  const gridContainer = document.getElementById('grid');

  // 取得した要素の配列に対してループ処理を行い、DOMに追加します。
  elements.forEach((element) => {
    // 新しいdiv要素を作成します。
    const newDiv = document.createElement('div');
    // 作成したdiv要素にクラスを追加します。
    newDiv.classList.add('account-item');
    // div要素のテキストに、配列の要素のテキストを設定します。
    newDiv.textContent = element.text;
    // div要素のIDに、配列の要素のidを設定します。
    newDiv.id = element.id;
    // 設定が完了したdiv要素をgridコンテナに追加します。
    gridContainer.appendChild(newDiv);
  });
});
