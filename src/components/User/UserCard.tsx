import React from "react"

export const UserCard = (props: any) => {
  const { userData: data } = props
  console.log("SserCard Data", data)
  return (
    <div>
      <h3>{data.username}</h3>
      <h3>{data.email}</h3>
      <p>{data.createdAt}</p>
      <p>{data._id}</p>
    </div>
  )
}
