export const CheckIcon = ({ w, h }) => {
  return (
    <svg
      className='w-10 h-10'
      viewBox='0 0 133 133'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g
        id='check-group'
        className='origin-center animate-check-group'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <circle
          id='filled-circle'
          className='fill-[#0891b2]'
          cx='66.5'
          cy='66.5'
          r='54.5'
        />
        <circle
          id='white-circle'
          className='fill-[#d8d8d8] dark:fill-[#09090b] animate-circle'
          cx='66.5'
          cy='66.5'
          r='55.5'
        />
        <circle
          id='outline'
          className='stroke-[#0891b2] stroke-[4px] animate-outline'
          cx='66.5'
          cy='66.5'
          r='54.5'
        />
        <polyline
          id='check'
          className='stroke-[#d8d8d8] dark:stroke-[#09090b] stroke-[10px] animate-check stroke-dasharray-[0_75px] stroke-linecap-round stroke-linejoin-round'
          points='41 70 56 85 92 49'
        />
      </g>
    </svg>
  )
}
