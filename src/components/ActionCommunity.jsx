import { ItemAction } from "./"

const lists = [
  {
    title: "Community members",
    description: "Find and interact with any member of the community",
    icon: "img/community.svg",
    textButton: "View members"
  },
  {
    title: "Cast my vote",
    description: "To exercise my right to vote",
    icon: "img/vote.svg",
    textButton: "Vote now"
  },
  {
    title: "Publish content",
    description: "Post any content so that other members can interact with it",
    icon: "img/publish.svg",
    textButton: "Publish"
  },
  {
    title: "Chat with members",
    description: "Communicate with any member of the community",
    icon:"img/chat.svg",
    textButton: "Chat now"
  }

]

export const ActionCommunity = () => {
  return (
    <div className='flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-3'>
      {
        lists.map((item) =>
          <ItemAction
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            textButton={item.textButton}
          />
      )
      }
    </div>
  )
}