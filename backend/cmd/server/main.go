package main

import (
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "net/http"
)

// Post 型を定義
type Post struct {
    ID      int    `json:"id"`
    Title   string `json:"title"`
    Content string `json:"content"`
    Author  string `json:"author"`
    Date    string `json:"date"`
}

// ダミーデータ
var dummyPosts = []Post{
    {ID: 201, Title: "週末ブランチのレシピ公開！", Content: "ふわとろオムレツとアボカドトーストの簡単レシピ。隠し味は粒マスタードです #ブランチ #簡単レシピ", Author: "クッキング太郎", Date: "2025-12-05"},
    {ID: 202, Title: "寒い日の〆はやっぱりこれ！", Content: "冷凍のうどんを使って作る本格的な坦々麺アレンジ。ラー油をたっぷりかけるのがポイント！身体が芯から温まる〜", Author: "麺スタグラマー", Date: "2025-12-05"},
    {ID: 203, Title: "業務スーパーの優秀品見つけた", Content: "冷凍のムール貝、これでパエリア作ったら激うま！下処理不要で本格的な味が楽しめるから超おすすめ #業スー #時短料理", Author: "節約OL", Date: "2025-12-04"},
    {ID: 204, Title: "究極のTKG（卵かけご飯）への道", Content: "今日は白身と黄身を分けて、黄身を醤油漬けにしたものを乗せるスタイルに挑戦。ねっとり感が最高でした #卵かけご飯 #朝ごはん", Author: "グルメなAさん", Date: "2025-12-04"},
    {ID: 205, Title: "クリスマスに向けた試作", Content: "今年はローストビーフに挑戦中。低温調理器を使うと本当にしっとり仕上がりますね。ソースの配合が今後の課題で #クリスマス料理 #低温調理", Author: "パーティー好き", Date: "2025-12-03"},
}

func main() {
    r := gin.Default()

    // CORS 設定（全て許可）
    r.Use(cors.Default())

    // /posts でダミーデータ返す
    r.GET("/posts", func(c *gin.Context) {
        c.JSON(http.StatusOK, dummyPosts)
    })

    r.Run(":8080")
}
