import { Post } from "@/types/types";

export const MOCK_POSTS: Post[] = [
  {
    title: "Deep Field: The Pillars of Creation",
    image_url: "https://images-assets.nasa.gov/image/PIA23645/PIA23645~medium.jpg",
    celestial_body: "Eagle Nebula (M16)",
    equipment: "James Webb Space Telescope (NIRCam / MIRI)",
    created_at: "2026-03-12T22:45:00Z",
    atmosphere_condition: "Vacuum / Zero-Occlusion",
    description: "Multi-wavelength observation of interstellar gas and dust within the Eagle Nebula. Significant star formation detected in the infrared spectrum at the pillar terminals.",
    where: "Deep Space Orbit - L2 Point"
  },
  {
    title: "The Rings of Saturn: Shadow Transit",
    image_url: "https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F91%2F4e%2F43dd36534b5792afea0228cdacd0%2Fwebbtelescopiouniv14.jpg&w=1280&q=75",
    celestial_body: "Saturn (Gas Giant)",
    equipment: "Cassini-Huygens Mission / Wide Angle Camera",
    created_at: "2026-02-28T04:12:30Z",
    atmosphere_condition: "Atmospheric Scintillation: 0.2 arcsec",
    description: "High-resolution capture of the Cassini Division and Encke Gap. The image reveals the intricate gravitational disturbances caused by the moon Pan.",
    where: "Outer Solar System - Kronian System"
  },
  {
    title: "Tycho Crater: Terminator Detail",
    image_url: "https://cdn.pixabay.com/photo/2024/12/07/13/08/space-9250868_1280.jpg",
    celestial_body: "The Moon (Luna)",
    equipment: "Planewave CDK17 + ZWO ASI6200MM Pro",
    created_at: "2026-03-18T19:00:00Z",
    atmosphere_condition: "Bortle 1 / Excellent Transparency",
    description: "Ground-based observation of the Tycho crater during the lunar sunset. The central peak casts a 15km shadow across the basaltic floor.",
    where: "Atacama Desert Observatory, Chile"
  }
];