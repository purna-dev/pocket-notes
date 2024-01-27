import style from './NoteCard.module.css'

function NoteCard({note,groupname}) {

  return (
    <div className={style.note}>
        {note.note}
        <div className={style.notedatetime}>
            {note.date}  <span>●</span>  {note.time}
        </div>
    </div>
  )
}

export default NoteCard