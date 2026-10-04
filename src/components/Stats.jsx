import { forwardRef } from "react"

const Stats = forwardRef(function Stats(props, ref) {
  return (
    <div
      ref={ref}
      id="impact"
      className="absolute bottom-20 left-8 right-8 md:left-16 md:right-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-white/10 pt-6">

        <div>
          <p className="text-3xl md:text-4xl font-bold">
            58%
          </p>

          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
            Pickup Growth
          </p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-bold">
            23%
          </p>

          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
            Fewer Calls
          </p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-bold">
            27%
          </p>

          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
            User Growth
          </p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-bold">
            40%
          </p>

          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
            Call Reduction
          </p>
        </div>

      </div>
    </div>
  )
})

export default Stats