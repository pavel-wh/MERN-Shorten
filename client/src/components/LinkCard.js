import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <div>
            <h2>Ссылка</h2>
            <p>Сокращенная ссылка: <a href={ link.to } target="_blank" rel="noopener noreferrer">{ link.to }</a></p>
            <p>Базовая ссылка: <a href={ link.from } target="_blank" rel="noopener noreferrer">{ link.from }</a></p>
            <p>Количество кликов: <b>{ link.clicks }</b></p>
            <p>Дата создания: <b>{ new Date(link.date).toLocaleDateString() }</b></p>
        </div>
    )
}