type VideoProps = {
    id: {
      videoId: string
    }
    snippet: {
      description: string,
      thumbnails: {
        medium: {
          url: string
        }
      },
      title: string
    }
}