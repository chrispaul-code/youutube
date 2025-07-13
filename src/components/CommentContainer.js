import React from 'react'

const data = [
  {
    id: 1,
    username: "laharisisitla.0207",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    timeAgo: "14 hours ago",
    comment: "Who did not got assessment mail we should wait till next week...",
    likes: 26,
    repliesCount: 3,
    replies: [
      {
        id: 101,
        username: "student_user1",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        timeAgo: "15 hours ago",
        comment: "Yes, same here. Still waiting for the mail.",
        likes: 5,
      },
      {
        id: 102,
        username: "hopeful_dev",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        timeAgo: "14 hours ago",
        comment: "Probably they'll send by next Monday.",
        likes: 2,
      }
    ]
  },
  {
    id: 2,
    username: "AvidiTejaswini",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    timeAgo: "16 hours ago",
    comment: "I don't receive the Infosys email.",
    likes: 3,
    repliesCount: 0,
    replies: []
  },
  {
    id: 3,
    username: "rahul_coder",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    timeAgo: "10 hours ago",
    comment: "Anyone got mail for second round?",
    likes: 10,
    repliesCount: 1,
    replies: [
      {
        id: 201,
        username: "dev_raj",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        timeAgo: "9 hours ago",
        comment: "Yes I got it yesterday evening!",
        likes: 4,
      }
    ]
  },
  {
    id: 4,
    username: "sneha.tech",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    timeAgo: "8 hours ago",
    comment: "Still no updates from Infosys 😔",
    likes: 7,
    repliesCount: 0,
    replies: []
  }
];


const CommentContainer = () => {
  return (
  <div className=' ml-[80px] h-[200px] w-[50rem] -mt-40 '>
        <div class="h-auto w-[50rem]  p-4 bg-white rounded shadow">
     
  <div class="flex justify-between items-center border-b pb-3 mb-4">
    <h2 class="text-xl font-semibold">37 Comments</h2>
    <div class="text-sm text-gray-600 cursor-pointer hover:text-black">
      Sort by
    </div>
  </div>

 
  <div class="flex items-start gap-3 mb-6">
    <img src="https://imgs.search.brave.com/NmPZjePZioE_lCWEwu7wkqrQwsFRs9j0toSsN3hn8gY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NTQ3LzEyMC9zbWFs/bC9nZW5lcmljLXVz/ZXItcHJvZmlsZS1h/dmF0YXItZm9yLW9u/bGluZS1wbGF0Zm9y/bXMtYW5kLXNvY2lh/bC1tZWRpYS12ZWN0/b3IuanBn" alt="User avatar" className="w-10 h-10 rounded-full object-cover"/>
    <input
      type="text"
      placeholder="Add a comment..."
      class="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
{/* 
  <!-- Comment --> */}
  {/* <Comment/> */}
  
    <CommentList comments={data} />
  
</div>
  </div>
  )
}

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment info={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className='pl-5 border-l border-gray-300 ml-5'>
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};


const Comment=({info})=>{
  
  return(
   <div>
     <div class="flex gap-3 mb-4">
    <img src={info.avatar} alt="User avatar" class="w-7 h-7 rounded-full object-cover"/>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <span class="font-semibold">{info.username}</span>
        <span class="text-xs text-gray-500">{info.timeAgo}</span>
      </div>
      <p class="mt-1 text-sm">{info.comment}</p>

      <div class="flex items-center gap-4 text-gray-600 text-sm mt-2">
        <button class="hover:text-blue-600">Reply</button>
        <button  class="hover:text-blue-600">{info.repliesCount} replies</button>
      </div>
    </div>
     </div>
  </div>

  )
}


export default CommentContainer
