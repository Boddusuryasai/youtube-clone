import React from 'react'

const comments =[
    {
        name:"Surya sai",
        comment:"He is a frontend webdeveloper",
        replies:[
            {
                name:"Surya sai",
                comment:"He is a frontend webdeveloper",
                replies:[
                    {
                        name:"Surya sai",
                        comment:"He is a frontend webdeveloper",
                        replies:[
                            {
                                name:"Surya sai",
                                comment:"He is a frontend webdeveloper",
                                replies:[]
                            }
                        ]
                    }
                    
                    
                ]
            }
        ]
    },
    {
        name:"Surya sai",
        comment:"He is a frontend webdeveloper",
        replies:[
            {
                name:"Surya sai",
                comment:"He is a frontend webdeveloper",
                replies:[]
            }
        ]
    },
    {
        name:"Surya sai",
        comment:"He is a frontend webdeveloper",
        replies:[]
    },
    {
        name:"Surya sai",
        comment:"He is a frontend webdeveloper",
        replies:[]
    }
    
]
function countComments(comments) {
    let count = comments.length;
    for (const comment of comments) {
      count += countComments(comment.replies);
    }
    return count;
  }
  
  const numberOfComments = countComments(comments);
 
  
const counts = comments.map(comment => comment.replies.length + comment.replies.reduce((acc, reply) => acc + reply.replies.length, 0));
const total = counts.reduce((acc, count) => acc + count, comments.length);
const Comment =({comments})=>{
    return (
        <div className='flex items-center w-full border p-3 gap-2 bg-slate-100'>
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            <div>
                <h1 className='font-bold text-gray-800'>{comments.name} </h1>
                <p className='font-medium text-gray-600'>{comments.comment}</p>
                
            </div>
        </div>
    )
}

const CommentsList = ({comments})=>{
    return (
        
            comments.map((comment,i)=>{
                return (
                    <div key={i} className="mt-1">
                        <Comment comments={comment} />
                        <div className='ml-4'>
                            <CommentsList comments={comment.replies}/>
                        </div>
                    </div>
                )
            })
        
    )
}
const CommentsContainer = () => {
  return (
    <div>
        <h1 className='text-black font-semibold text-2xl py-2'>{numberOfComments+" "}Comments</h1>
        <CommentsList comments={comments}/>
    </div>
  )
}

export default CommentsContainer