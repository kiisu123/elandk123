import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Services section */}
      <section id="業務内容" className="py-8 px-4 bg-white animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            業務内容
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
              家庭用から業務用まで、お客様のニーズに合わせた
              最適なエアコン設置を施工しています。<br /><br />
              福井県内に特化しており、年間約1500件。<br /><br />
              お客様の喜ぶ顔を間近で見ることができるのが
              何よりのやりがいです。
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="会社概要" className="py-8 px-4 bg-gray-50 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            会社概要
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/2434325.jpg"
                alt="背景"
                className="w-full h-full object-cover opacity-5"
              />
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">社名</h3>
                    <p className="text-gray-600">El&K株式会社</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">本社所在地</h3>
                    <p className="text-gray-600">〒910-0303<br />福井県坂井市丸岡町猪爪３丁目１０７番地３</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">設立年</h3>
                    <p className="text-gray-600">平成20年</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">資本金</h3>
                    <p className="text-gray-600">111万円</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">従業員数</h3>
                    <p className="text-gray-600">社員2名</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">代表者</h3>
                    <p className="text-gray-600">高島　孝文</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">お問い合わせ</h3>
                    <p className="text-gray-600">elandk@elandk.co.jp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="施工実績" className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            施工実績
          </h2>
          <p className="text-gray-600 text-center mb-8">※ここに掲載している写真は、一部の施工実績です</p>
          <Testimonials />
        </div>
      </section>

      {/* Recruitment Section */}
      <section id="リクルート" className="py-8 px-4 bg-gray-50 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">リクルート</h2>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {/* 基本情報 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">募集要項</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">必要資格</h4>
                      <p className="text-gray-600">なし（入社後、資格取得をサポートします）</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">勤務地</h4>
                      <p className="text-gray-600">福井県（転勤なし）</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">雇用形態</h4>
                      <p className="text-gray-600">正社員</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">就業時間</h4>
                      <p className="text-gray-600">8時00分〜17時00分（休憩時間：90分）</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">残業時間</h4>
                      <p className="text-gray-600">月平均5時間（6～9月の繁忙期に集中します）</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">給与</h4>
                      <p className="text-gray-600">基本給：169,600円〜318,000円</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">賃金形態</h4>
                      <p className="text-gray-600">日給 8,000円〜15,000円</p>
                      <p className="text-sm text-gray-500">月平均労働日数：21.2日</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 待遇・福利厚生 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">待遇・福利厚生</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">基本待遇</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>車・バイク通勤可</li>
                        <li>通勤手当：実費支給（上限なし）</li>
                        <li>雇用保険</li>
                        <li>労災保険</li>
                        <li>健康保険</li>
                        <li>厚生年金</li>
                        <li>海外研修（実績:2024年 次回:2027年予定）</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">その他制度</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>退職金制度あり（勤続3年以上）</li>
                        <li>復職制度あり</li>
                        <li>定年制なし</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1日の流れ */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">1日の流れ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 午前 */}
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>
                    <div className="space-y-6">
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">8:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">現場集合</h5>
                          <p className="text-sm text-gray-600">作業内容の確認・準備</p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">8:30</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">作業開始</h5>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">10:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">小休憩</h5>
                          <p className="text-sm text-gray-600">15分程度</p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">10:15</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">作業再開</h5>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">12:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">昼休憩</h5>
                          <p className="text-sm text-gray-600">60分程度</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 午後 */}
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>
                    <div className="space-y-6">
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">13:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">作業再開</h5>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">15:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">小休憩</h5>
                          <p className="text-sm text-gray-600">15分程度</p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">15:15</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">作業再開</h5>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">16:30</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">作業終了＆後片付け</h5>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-0 w-16 flex items-center justify-center">
                          <div className="text-sm font-medium text-amber-600">17:00</div>
                        </div>
                        <div className="ml-20">
                          <h5 className="text-base font-medium text-gray-800">退社</h5>
                          <p className="text-sm text-gray-600">翌日の準備などを済ませて退社</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 応募方法と選考フロー */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">応募方法と選考フロー</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-4">選考フロー</h4>
                    <div className="relative">
                      {/* Flow steps */}
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>
                      <div className="space-y-8">
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                            <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                          </div>
                          <div className="ml-24">
                            <h5 className="text-lg font-medium text-gray-800">1. 書類選考</h5>
                            <p className="text-gray-600 mt-2">
                              下記のメールアドレスに履歴書・職務経歴書をお送りください。<br />
                              ※職務経歴書は未経験の方は不要です。
                            </p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                            <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                          </div>
                          <div className="ml-24">
                            <h5 className="text-lg font-medium text-gray-800">2. 面接</h5>
                            <p className="text-gray-600 mt-2">
                              書類選考通過後、面接日時を調整させていただきます。
                            </p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                            <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                          </div>
                          <div className="ml-24">
                            <h5 className="text-lg font-medium text-gray-800">3. 内定</h5>
                            <p className="text-gray-600 mt-2">
                              1週間以内に、合否の結果をご連絡いたします。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">応募書類の送付先メールアドレス：</p>
                    <p className="text-xl font-semibold text-gray-800">
                      elandk@elandk.co.jp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;