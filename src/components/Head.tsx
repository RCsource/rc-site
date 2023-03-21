import { useEffect } from "react"

const Head = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title + " :: RubyCats"
  }, [])

  return null
}

export default Head