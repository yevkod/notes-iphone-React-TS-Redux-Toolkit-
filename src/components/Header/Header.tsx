import React, {FC} from 'react';
import s from './Header.module.css'

export const Header:FC = () => {
    return (
        <div className={s.header}>
            <div className={s.notes}>Notes</div>
        </div>
    );
};
