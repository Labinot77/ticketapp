
export const formatTimestamp = (timestamp: any) => {
  const options = {
    year: 'numeric',
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }

  const date = new Date(timestamp)
  // @ts-ignore
  const formattedDate = date.toLocaleString("en-US", options)

  return formattedDate
}

export interface StatusProps {
  status: string,
}

export interface CardProps {
  id: number,
  key: number,
  ticket: {
    title: string,
    description: string,
    category: string,
    priority: Number,
    progress: Number,
    status: string,
    createdAt: string,
    _id: number
  }
}


