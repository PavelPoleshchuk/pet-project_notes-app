import * as React from 'react';
import {CiSearch} from 'react-icons/ci'
import {BsPlusLg} from 'react-icons/bs'
import { NoteItem } from '../NoteItem';
import { Link } from 'react-router-dom';
import { INoteItem } from '../../data_notes';
type IProps = {
  notes:INoteItem[]
};
export const Notes = ({notes}:IProps) => {
  return (
    <section>
      <header className="notes__header">
        <h2>My notes</h2>
        <input type="text" autoFocus placeholder='Keyword...'/>
        <button className='notes__btn'><CiSearch/></button>
      </header>
      <main className='notes__container'>
        {notes.map(item=><NoteItem key={item.id} item={item}/>)}
      </main>
      <Link to='/create-note' className='btn btn__plus'><BsPlusLg/></Link>
    </section>
  );
};
