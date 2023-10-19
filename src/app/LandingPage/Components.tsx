import { ReactNode } from "react"

export const SectionHeader = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={`text-base font-light uppercase text-black ${className}`}>
      {children}
    </div>
  )
}

export const Divider = ({ className = "" }) => {
  return (
    <div
      className={`mb-12  mt-2 w-full border-b border-zinc-200 ${className}`}
    />
  )
}

export const Header = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={`mb-5 font-heading text-black xs:text-[25px] xs:leading-[25px] sm:text-[30px] sm:leading-[50px] md:text-[48px] md:leading-[60px] lg:leading-[50px] ${className}`}
  >
    {children}
  </div>
)

export const HeaderSm = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={"mb-3 font-heading text-[20px] text-black " + className}>
    {children}
  </div>
)

export const Para = ({ children, className }: any) => (
  <p
    className={`max-w-[425px] text-lg font-light leading-8 text-black ${className}`}
  >
    {children}
  </p>
)

export const ParaSm = ({ children, className }: any) => (
  <p
    className={`max-w-[425px] font-light leading-8 text-[#475569] xs:text-[0.875rem] md:text-[1rem] ${className}`}
  >
    {children}
  </p>
)
