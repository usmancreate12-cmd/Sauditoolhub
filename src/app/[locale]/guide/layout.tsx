export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl w-full px-4 md:px-6 py-12">
      {children}
    </div>
  )
}
