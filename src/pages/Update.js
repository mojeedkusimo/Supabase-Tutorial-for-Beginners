import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="page update">
      <h2>Update - {id} </h2>
    </div>
  )
}

export default Update
