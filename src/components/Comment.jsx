import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Commment({comment , onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/F-FabioFreitas-F.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fábio Freitas</strong>
              <time
                title='06 de Junho de 2022 às 15h30'
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title='Deletar comentário'>
             
              <Trash onClick = {handleDeleteComment} size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>
        <footer><button><ThumbsUp /> Aplaudir <span>123</span></button></footer>
      </div>
    </div>
  )
}