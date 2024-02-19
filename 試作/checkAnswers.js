// 回答をチェックする関数を定義します。
export function checkAnswers(shuffledElements) {
  // shuffledElements内の各要素に対して処理を行います。
  shuffledElements.forEach((element, index) => {
    // 対応するセレクトボックスの要素を取得します。
    let $answerElement = $('#a' + (index + 1));
    // 選択されたオプションのテキストを取得します。
    let userAnswer = $answerElement.find('option:selected').text();
    // 正しい答えを要素から取得します。
    let correctAnswer = element.answer;

    // 選択された答えが正しいかチェックし、色を設定します。
    // 正しい答えなら青色、未選択なら灰色、間違っていれば赤色になります。
    $answerElement.css('color', userAnswer === correctAnswer ? 'blue' : userAnswer === '' ? '#4a4a4a' : 'red');
  });
}
