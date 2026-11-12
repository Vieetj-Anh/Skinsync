import { usePlan } from '@/state/PlanProvider'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

const ChevronRight = ({ className = 'text-[#9FB0A9]' }: { className?: string }) => (
  <svg
    className={`h-[17px] w-[17px] shrink-0 transition-transform group-hover:translate-x-0.5 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Màn 48 · Tài khoản của tôi */
export default function S48Account() {
  const { active } = usePlan()
  return (
    <Screen tab={4} iconSize="sm">
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <div className="no-scrollbar z-20 mb-[74px] flex flex-1 flex-col justify-between overflow-y-auto px-4 pb-1 pt-1">
          <header className="flex flex-col">
            <div className="relative mb-1 flex h-7 items-center justify-between">
              <button
                aria-label="Quay lại"
                data-back="s10"
                className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full text-[#173B32] transition active:bg-[#E7EAD9]/60"
                type="button"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <BrandLogo />
              <div className="h-7 w-7" />
            </div>
            <div className="px-0.5">
              <h1 className="font-serif text-[22px] font-bold leading-tight text-[#173B32]">Tài khoản của tôi</h1>
              <p className="mt-0.5 text-[12px] leading-snug text-[#5F8075]">Quản lý thông tin cá nhân và các cài đặt của bạn.</p>
            </div>
          </header>
          <div className="flex items-center gap-3 rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="shadow-xs h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border border-[#DEE4E2] bg-[#EDEFE2]">
              <img alt="Nguyễn Minh Anh" className="h-full w-full object-cover" src="/img/people/user-minh-anh.jpg" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-serif truncate text-[15.5px] font-bold text-[#173B32]">Nguyễn Minh Anh</h2>
                <button
                  aria-label="Sửa thông tin"
                  data-go="s49"
                  className="flex items-center text-[#357D64] transition hover:text-[#173B32]"
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span
                  data-go="s32"
                  className="shadow-xs ml-auto inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#173B32] px-2 py-0.5 text-[10px] font-semibold text-[#F3C969]"
                >
                  <span>👑</span> {active.name}
                </span>
              </div>
              <p className="mt-1 truncate text-[11px] text-[#7F9B91]">
                ID: SKS123456 <span className="mx-1 text-[#D5DDDA]">|</span> minh.anh@gmail.com
              </p>
            </div>
          </div>
          <a
            data-go="s50"
            className="group flex items-center justify-between rounded-[16px] border border-[#D5E8E0] bg-[#EBF5F1] px-3.5 py-2.5 shadow-[0_2px_8px_rgba(23,59,50,0.03)] transition active:bg-[#E0EFE9]"
            href="#"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D7EBE3] text-[#173B32]">
                <svg className="h-5 w-5 text-[#173B32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0" strokeLinecap="round" />
                  <path d="M19 3l.8 1.6L21.4 5.4l-1.6.8L19 7.8l-.8-1.6L16.6 5.4l1.6-.8z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-bold leading-tight text-[#173B32]">Hồ sơ da của bạn</p>
                <p className="mt-0.5 text-[11px] leading-tight text-[#5F8075]">Đã cập nhật 14/10/2026</p>
              </div>
            </div>
            <ChevronRight className="text-[#173B32]" />
          </a>
          <div className="divide-y divide-[#F1F4F3] rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <a data-go="s49" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E0F2FE]">
                  <svg className="h-4 w-4 text-[#0284C7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Hồ sơ cá nhân</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s50" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FCE7F3]">
                  <svg className="h-4 w-4 text-[#DB2777]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Hồ sơ làn da</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s32" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FEF3C7]">
                  <svg className="h-4 w-4 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Gói dịch vụ của tôi</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s33" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7]">
                  <svg className="h-4 w-4 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 15l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Lịch sử khám</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s51" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE]">
                  <svg className="h-4 w-4 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Đơn hàng của tôi</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s41" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FFEDD5]">
                  <svg className="h-4 w-4 text-[#EA580C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Điểm thưởng</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11.5px] font-semibold text-[#173B32]">70 điểm</span>
                <ChevronRight />
              </div>
            </a>
          </div>
          <div className="divide-y divide-[#F1F4F3] rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <a data-go="s44" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#CCFBF1]">
                  <svg className="h-4 w-4 text-[#0D9488]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Thông báo</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s52" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E2E8F0]">
                  <svg className="h-4 w-4 text-[#475569]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Quyền riêng tư và bảo mật</span>
              </div>
              <ChevronRight />
            </a>
            <a data-go="s52" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E0E7FF]">
                  <svg className="h-4 w-4 text-[#4F46E5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Trợ giúp</span>
              </div>
              <ChevronRight />
            </a>
          </div>
          <button
            data-tab="s02"
            data-toast="Đã đăng xuất"
            className="flex w-full items-center justify-center gap-2 rounded-[16px] border border-[#FBEAE8] bg-white py-2.5 text-[#E04F5F] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition active:bg-[#FEF5F5]"
            type="button"
          >
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2]">
              <svg className="h-4 w-4 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#E04F5F]">Đăng xuất</span>
          </button>
        </div>
      </div>
    </Screen>
  )
}
