import React from "react"
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import { SSL_OP_SINGLE_DH_USE } from "constants";

let users = [];
let bucketListItems = [];
let user = {}
// this shows 1 user as option for select tag 

const styling = {
  userCard: {
    width: "300px",
    height: "125px",
    margin: "50px",
    borderRadius: "5pt"
  },
  BLImage: {
    height: "200px",

  },
  BLCard: {
    width: "250px",
    height: "275px",
    border: "solid black",
    margin: "50px",
    borderRadius: "5pt"
  },
  CLCard: {
    width: "300px",
    height: "75px",
    margin: "50px",
    borderRadius: "5pt"
  }
}

const userPreview = (user) => (
  <div class="card is-centered"
    // User Card styling
    style={styling.userCard}>
    <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={user.picture} alt="Profile Image" />
            </figure>
          </div>
          <div class="media-content">
            <Link to={`/user/${user.id}/`}>{user.userName}</Link>
            <p class="subtitle is-6">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
)

const userList = (users) => (
  <p>
    {users.map(userPreview)}
  </p>
)

// displays bucketListItem id, and status
const bucketListItemPreview = (bucketListItem) => (
  <div class="columns">

    <div class="card"
      style={styling.BLCard}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img style={styling.BLImage} src={bucketListItem.picture} alt="Profile Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <Link to={`/bucketlistitem/${bucketListItem.id}/`}>{bucketListItem.bucketListName}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// displays array of bucketListItems
const bucketListItemList = (bucketListItems) => (
  <p>
    {bucketListItems.map(bucketListItemPreview)}
  </p>
)

// displays bucketListItem id, and status
const checkListItemPreview = (checkListItem) => (
  <div class="card"
    style={styling.CLCard}>
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p>{checkListItem.checkListName}</p>
          <input class="radio" type="radio" name="status" value={checkListItem.status} />
            Complete
        </div>
      </div>
    </div>
  </div>
)

// displays array of checkListItems
const checkListItemList = (checkListItems) => (
  <ul>
    {checkListItems.map(checkListItemPreview)}
  </ul>
)

export {
  bucketListItemList,
  bucketListItemPreview,
  checkListItemList,
  checkListItemPreview,
  userList,
  userPreview,
  users,
  user,
  bucketListItems,
}