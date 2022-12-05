import React from 'react'
import Section from './Section'

export default function SectionListing({ listings }) {
  return (
    listings.map(section => {
        return (
          <>
            <Section key={section.id} listing={section} />
            <div key={section.id + "-divider"} className="h-screen"/>
          </>
        )
    })
  )
}
