// 指定された数のセレクトボックスを生成する関数をエクスポートします
export function createSelectElements(numberOfElements) {
    // selectContainerというIDを持つ要素を選択し、内容を空にします
    let $container = $('#selectContainer').empty();
    
    // 指定された数だけセレクトボックスを生成するためのループ
    for (let i = 0; i < numberOfElements; i++) {
      // div要素を生成し、'cell'というクラスを追加
      $('<div>').addClass('cell').append(
        // select要素を生成し、IDを動的に設定
        $('<select>').attr('id', 'a' + (i + 1)).append(
          // オプション要素を追加し、値とテキストを設定（初期値）
          $('<option>').val('0').text(''),
          // オプション要素を追加し、値とテキストを設定（借方）
          $('<option>').val('1').text('借方'),
          // オプション要素を追加し、値とテキストを設定（貸方）
          $('<option>').val('2').text('貸方')
        )
      // 生成したdiv要素をコンテナに追加
      ).appendTo($container);
    }
  }
