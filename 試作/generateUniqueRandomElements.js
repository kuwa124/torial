// ユニークなランダムな要素を生成する関数
export function generateUniqueRandomElements(elements) {
  // 元の配列のコピーを作成して、それをシャッフルする
  let shuffled = [...elements];
  // 配列の最後の要素から開始して、各要素に対してランダムな位置と交換する
  for (let i = shuffled.length - 1; i > 0; i--) {
    // 0からiまでのランダムなインデックスjを選ぶ
    let j = Math.floor(Math.random() * (i + 1));
    // 現在の要素（i）とランダムに選んだ要素（j）の位置を交換する
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // シャッフルされた配列を返す
  return shuffled;
}