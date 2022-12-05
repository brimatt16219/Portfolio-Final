import React from 'react'

export default function Section({ listing }) {

  return (
    <section id={listing.id} className="grid place-items-center content-center text-center min-h-screen p-0 border-0">
      {listing.component }
    </section>
  )
}
