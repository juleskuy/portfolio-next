import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export const dynamic = 'force-static'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Circle container */}
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid #38bdf8', // accent-ice
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    {/* 4-pointed star (constructed with 2 skinny ovals or CSS shapes) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '14px',
                            height: '14px',
                            background: '#38bdf8',
                            clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)',
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
