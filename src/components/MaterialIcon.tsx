import React from 'react'

interface IMaterialIconsProps {
  name: string
}

const MaterialIcons = ({ name }: IMaterialIconsProps) => <i className="material-icons">{name}</i>

export default MaterialIcons
