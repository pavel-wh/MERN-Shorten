import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        )
        history.push(`/detail/${data.link._id}`)
      } catch (error) {}
    }
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2" style={{ paddingTop: '2rem' }}>
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            className="validate"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <input
            type="submit"
            className="btn yellow darken-4"
            value="Создать"
            onClick={pressHandler}
          />
          <label htmlFor="link" value={link}>
            Ссылка
          </label>
        </div>
      </div>
    </div>
  )
}
