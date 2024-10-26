import React from 'react'

const BlogItem = () => {
  return (
    <div className="flex flex-col gap-3 py-8 border-b border-[#EEEEEE] md:px-0 px-8">
      <span className="text-[#222222]">Oct.24.2024 유진주</span>
      <p className="text-3xl font-bold">
        만드는 사람이 수고로우면 쓰는 사람이 편하다: 사용자경험관리TF 활동
        이야기
      </p>
      <p>
        사용자들의 행복하고 편리한 배달의민족 앱 사용을 위해 노력 중인
        사용자경험TF의 따끈따끈한 이야기를 전해드립니다.
      </p>
    </div>
  )
}

export default BlogItem
