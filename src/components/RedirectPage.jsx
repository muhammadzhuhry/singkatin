import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectPage() {
  const { shortenedUrl } = useParams();
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      Redirecting to the original URL...{shortenedUrl}
    </div>
  )
}
