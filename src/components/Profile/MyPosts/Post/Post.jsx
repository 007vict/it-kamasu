import React from "react";
import s from './Post.module.css'

const Post = () => {
  return <div className={s.item}>
          <img src="https://cdn.xxl.thumbs.canstockphoto.ru/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-isolated-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82%D1%8B_csp64736665.jpg" alt=""/>
          post 1
        <div>
          <span>like</span>
        </div>
        </div>
}

export default Post;