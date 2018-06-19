$(function(){
    $("button").click(function(){
        var quotes=["\“Có những người mình yêu Nhưng mà không gần được. Có những người yêu mình Nhưng mà không ừ được.\”<br>- <small>Đoàn Minh Phượng</small>",
         "\"Trên đời này chỉ có một thứ không thể miễn cưỡng, đó là tình yêu. Chỉ là nói như vậy, nhưng trên đời này có mấy ai có thể chân chính làm được? – Rất nhiều người biết rõ là không thể nhưng vẫn cưỡng cầu.\"<br>- <small>Nguyệt Xuất Vân</small> ",
          "\"Thực ra, tất cả những đôi lứa trên thế gian này… đều đã từng là những người xa lạ với nhau.\"<br> - <small>Tân Di Ổ</small>",
        "\"Với thế giới, bạn có thể chỉ là một người, nhưng với một người, bạn có thể là cả thế giới.\"<br>-<small>Khuyết Danh</small>",
    "\"Những người yêu thương sâu sắc tin vào điều không thể.\"<br> - <small>Elizabeth Barrett Browning</small>",
"\"Chỉ có một thứ hạnh phúc trên đời, yêu và được yêu.\"<br>-<small> George Sand</small>",
"\"Tình cảm - một khi đã bỏ ra thì không thể thu hồi, lại không thể quên đi\"<br>- <small>Ân Tầm</small>",];
            $('#content').html(quotes[Math.floor(Math.random()*(quotes.length))]);
    })

})
