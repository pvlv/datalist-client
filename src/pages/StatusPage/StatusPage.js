import React from 'react';

export function StatusPage({ success, error, notFound }) {
  if (success) {
    return <div>Success</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (notFound) {
    return <div>Not Found</div>;
  }

  return null;
}
