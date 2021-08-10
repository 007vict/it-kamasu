import React, {useState} from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return <div className={styles.pagination}>
    {portionNumber > 1 &&
    <a onClick={() => { setPortionNumber(portionNumber - 1)}}>PREV</a>}
    {pages
      .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
      .map(p => {
      return <a className={currentPage === p && styles.active}
                   onClick={(e) => {
                     onPageChanged(p)
                   }}>{p}</a>
    })
    }
    { portionCount > portionNumber &&
    <a onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</a>
    }
  </div>
}

export default Paginator