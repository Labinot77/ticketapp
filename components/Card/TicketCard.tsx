import Link from 'next/link'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'
import { CardProps, formatTimestamp } from '@/lib/utils'


const TicketCard = ({ id, key, ticket}: CardProps) => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-md p-3 m-2'>
      <div className='flex justify-between items-start'>
      <PriorityDisplay priority={ticket.priority} />
      {/* <div className='ml-auto'> */}
      <DeleteBlock id={ticket._id}/>
      {/* </div> */}
      </div>
      <Link
      href={`/TicketPage/${ticket._id}`} style={{ display: "contents"}}>
      <h4>{ticket.title}</h4>
      <hr  className='h-px border-0 bg-page mb-2'/>
      <p className='flex-wrap'>{ticket.description}</p>
      <div className='flex-grow' />
      <div className='flex mt-2'>
        <div className='flex flex-col'>
          <p className='text-xs my-1'>{formatTimestamp(ticket.createdAt)}</p>
      <ProgressDisplay progress={ticket.progress}/>
        </div>
        <div className='ml-auto flex items-end'>
      <StatusDisplay status={ticket.status} />
        </div>
      </div>
      </Link>
    </div>
  )
}

export default TicketCard