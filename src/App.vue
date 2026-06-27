<template>
  <div class="relative overflow-hidden bg-stone-50 text-slate-950">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-soft-radial opacity-80"></div>
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,246,241,0.42),transparent)]"></div>
    <div class="pointer-events-none absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl"></div>

    <header class="shell relative z-10 pt-6 sm:pt-8">
      <nav class="flex items-center justify-between rounded-full border border-stone-300/80 bg-white/80 px-4 py-3 shadow-panel backdrop-blur-sm sm:px-6">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">Z</div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">Zivo</p>
            <p class="hidden text-xs text-slate-500 sm:block">Valuation and review infrastructure</p>
          </div>
        </div>
        <div class="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a v-for="item in navItems" :key="item.label" :href="item.href" class="transition hover:text-slate-950">
            {{ item.label }}
          </a>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
          <a
            :href="loginUrl"
            class="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Login
          </a>
          <a
            :href="testProductUrl"
            class="inline-flex items-center rounded-full bg-slate-950 px-3 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:px-4 sm:text-sm"
          >
            <span class="sm:hidden">Test product</span>
            <span class="hidden sm:inline">Test the product</span>
          </a>
        </div>
      </nav>
    </header>

    <main class="relative z-10">
      <section class="shell section pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pt-24">
        <div class="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_35rem] lg:items-center lg:gap-14">
          <div class="max-w-2xl">
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-stone-500" data-reveal style="--reveal-delay: 80ms;">
              Reduce manual review and customer chasing
            </p>
            <h1 class="font-serif mt-6 max-w-3xl text-balance text-[2.7rem] font-medium tracking-tight text-slate-950 sm:mt-8 sm:text-6xl lg:text-[4.6rem] lg:leading-[0.96]" data-reveal style="--reveal-delay: 160ms;">
              Help your team review valuation enquiries faster.
            </h1>
            <p class="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8" data-reveal style="--reveal-delay: 240ms;">
              Zivo collects better information up front, suggests likely matches and helps your team focus on the enquiries that actually need attention.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4" data-reveal style="--reveal-delay: 320ms;">
              <a
                :href="testProductUrl"
                class="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Test the product
              </a>
              <a
                href="#pricing"
                class="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/90 px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-stone-400 hover:text-slate-950"
              >
                View pricing
              </a>
            </div>

          </div>

          <div class="relative mx-auto w-full max-w-[34rem] lg:max-w-none" data-reveal style="--reveal-delay: 220ms;">
            <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-accent-50 to-stone-100 blur-2xl"></div>
            <div class="relative rounded-[1.7rem] border border-stone-300/80 bg-white/92 p-3 shadow-soft backdrop-blur-sm sm:rounded-[2rem] sm:p-5">
              <div class="overflow-hidden rounded-[1.7rem] border border-stone-200 bg-[#f6f8fb] shadow-panel">
                <div class="flex items-center justify-between bg-[#8fd06d] px-4 py-3.5 text-white">
                  <div>
                    <p class="text-sm font-semibold leading-none">Demo Assistant</p>
                    <p class="mt-1 text-xs text-white/80">Powered by Test Company</p>
                  </div>
                  <div class="flex items-center gap-3 text-white/85">
                    <span class="h-2.5 w-2.5 rounded-full bg-white/70"></span>
                    <span class="text-sm">↻</span>
                    <span class="text-sm">×</span>
                  </div>
                </div>

                <div class="space-y-3 px-4 py-4 sm:px-5">
                  <div
                    v-for="message in chatMessages"
                    :key="message.text"
                    class="w-fit rounded-[1.1rem] border px-4 py-2.5 text-sm leading-5"
                    data-reveal
                    :style="{ '--reveal-delay': `${message.delay}ms` }"
                    :class="message.role === 'assistant'
                      ? 'max-w-[15.5rem] sm:max-w-[22rem] border-stone-200 bg-white text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.05)]'
                      : 'max-w-[13rem] sm:max-w-[18rem] ml-auto border-[#81c95f] bg-[#8fd06d] text-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]'"
                  >
                    {{ message.text }}
                  </div>

                  <div class="rounded-[1.05rem] border border-slate-300/30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.96)_42%,rgba(241,245,249,0.94)_100%)] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]" data-reveal style="--reveal-delay: 760ms;">
                    <div class="rounded-[0.95rem] border border-stone-200 bg-white px-3 py-3 shadow-[0_6px_16px_rgba(15,23,42,0.04)]">
                      <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500">{{ heroSummary.question }}</p>
                      <p class="mt-1 text-sm font-medium text-slate-900">{{ heroSummary.answer }}</p>
                    </div>

                    <div class="mt-3 rounded-[0.95rem] border border-[#8fd06d]/35 bg-white px-4 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                      <div class="flex items-center justify-between gap-3">
                        <p class="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">Estimated range</p>
                        <span class="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">Moderate confidence</span>
                      </div>
                      <p class="mt-3 font-serif text-3xl font-medium tracking-tight text-slate-950">£1,600 – £2,400</p>
                      <p class="mt-2 text-xs leading-5 text-slate-500">Based on similar catalog and market signals.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shell pb-12 sm:pb-16">
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="(item, index) in featureHighlights"
            :key="item.title"
            class="rounded-[1.25rem] border border-stone-300/80 bg-white/80 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
            data-reveal
            :style="{ '--reveal-delay': `${120 + (index * 80)}ms` }"
          >
            <p class="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">{{ item.kicker }}</p>
            <h3 class="mt-3 text-lg font-semibold tracking-tight text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.copy }}</p>
          </article>
        </div>
      </section>

      <section id="value" class="shell pb-20">
        <div class="grid gap-10 border-y border-stone-300/80 py-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div class="max-w-md" data-reveal>
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Why teams buy it</p>
            <h2 class="font-serif mt-6 text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
              Spend less time reviewing weak enquiries.
            </h2>
          </div>

          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            <article v-for="(item, index) in valuePoints" :key="item.title" class="border-t border-stone-300 pt-5" data-reveal :style="{ '--reveal-delay': `${index * 90}ms` }">
              <h3 class="text-xl font-semibold tracking-tight text-slate-950">{{ item.title }}</h3>
              <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600">{{ item.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="workflow" class="shell pb-8 pt-16 sm:py-20 lg:py-24">
        <div class="grid gap-8 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div class="max-w-md" data-reveal>
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">How it works</p>
            <h2 class="font-serif mt-6 text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
              Connect your data, guide the customer and review what matters.
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-600">
              Customers answer better, your team reviews faster and the right cases are easier to prioritise.
            </p>
          </div>

          <div class="grid gap-6 sm:gap-8 md:grid-cols-3">
            <article v-for="(step, index) in flowSteps" :key="step.number" class="border-t border-stone-300 pt-5" data-reveal :style="{ '--reveal-delay': `${index * 110}ms` }">
              <p class="text-sm font-medium text-stone-500">{{ step.number }}</p>
              <h3 class="mt-4 text-xl font-semibold tracking-tight text-slate-950">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ step.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="product" class="shell pb-16 pt-8 sm:pb-20 sm:pt-12 lg:py-24">
        <div class="overflow-hidden rounded-[2rem] border border-stone-300/80 bg-white/88 shadow-soft backdrop-blur-sm">
          <div class="grid gap-12 p-8 sm:p-10 lg:p-12">
            <div class="max-w-3xl" data-reveal>
              <p class="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Dashboard</p>
              <h2 class="font-serif mt-6 max-w-2xl text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
                Review leads, estimates and product matches in one place.
              </h2>
              <p class="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Your team can quickly see what came in, what needs attention and where to act next.
              </p>
            </div>

            <div class="rounded-[1.6rem] border border-slate-200 bg-white p-3 shadow-sm lg:hidden" data-reveal>
              <div class="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[#f8fafc]">
                <div class="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3.5">
                  <div>
                    <p class="text-sm font-semibold text-slate-950">Dashboard</p>
                    <p class="mt-1 text-[11px] text-slate-500">What needs attention first</p>
                  </div>
                  <span class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">Live</span>
                </div>

                <div class="space-y-3 p-3">
                  <div class="flex gap-2 overflow-x-auto pb-1">
                    <span
                      v-for="item in mobileDashboardNav"
                      :key="item.label"
                      class="shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold"
                      :class="item.active ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200'"
                    >
                      {{ item.label }}
                    </span>
                  </div>

                  <div class="rounded-[1rem] border border-rose-200 bg-rose-50/50 p-4">
                    <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-rose-600">{{ attentionCards[0].label }}</p>
                    <div class="mt-3 flex items-end justify-between gap-3">
                      <p class="text-4xl font-semibold tracking-tight text-slate-950">{{ attentionCards[0].value }}</p>
                      <span class="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-rose-500 ring-1 ring-rose-100">{{ attentionCards[0].age || 'Urgent' }}</span>
                    </div>
                    <p class="mt-2 text-sm leading-6 text-slate-600">{{ attentionCards[0].copy }}</p>
                  </div>

                  <div class="space-y-2">
                    <div
                      v-for="item in dashboardStats.slice(0, 2)"
                      :key="item.label"
                      class="flex items-center justify-between gap-4 rounded-[1rem] border border-slate-200 bg-white px-4 py-3"
                    >
                      <div class="min-w-0">
                        <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{{ item.label }}</p>
                        <p class="mt-1 text-xs leading-5 text-slate-500">{{ item.copy }}</p>
                      </div>
                      <div class="shrink-0 rounded-[0.9rem] bg-slate-50 px-3 py-2 text-center">
                        <p class="text-2xl font-semibold tracking-tight text-slate-950">{{ item.value }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-[1rem] border border-slate-200 bg-white">
                    <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                      <div>
                        <p class="text-sm font-semibold text-slate-950">Recent queue</p>
                        <p class="mt-1 text-[11px] text-slate-500">A quick view of what the team sees.</p>
                      </div>
                    </div>

                    <div class="divide-y divide-slate-100">
                      <div
                        v-for="item in leadQueue.slice(0, 2)"
                        :key="item.name"
                        class="px-4 py-3"
                      >
                        <div class="flex items-start justify-between gap-3">
                          <div>
                            <p class="text-sm font-semibold text-slate-950">{{ item.name }}</p>
                            <p class="mt-1 text-xs text-slate-600">{{ item.type }}</p>
                            <p class="mt-2 text-[11px] text-slate-500">{{ item.meta }}</p>
                          </div>
                          <span class="shrink-0 rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-500">{{ item.age }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden rounded-[1.6rem] border border-slate-200 bg-white p-3 shadow-sm lg:block lg:p-4" data-reveal>
              <div class="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-[#f8fafc]">
                <div class="grid min-h-[42rem] grid-cols-[13rem_1fr]">
                  <aside class="border-r border-slate-200 bg-white">
                    <div class="px-4 py-4">
                      <p class="text-sm font-bold text-slate-950">Zivo</p>
                      <p class="mt-1 text-xs text-slate-500">Dashboard</p>
                    </div>

                    <nav class="border-t border-slate-200 px-3 py-3">
                      <div class="space-y-2">
                        <div
                          v-for="item in dashboardNav"
                          :key="item.label"
                          class="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold"
                          :class="item.active ? 'bg-slate-100 text-slate-950' : 'text-slate-600'"
                        >
                          <span>{{ item.label }}</span>
                          <span v-if="!item.active" class="text-slate-400">›</span>
                        </div>
                      </div>
                    </nav>
                  </aside>

                  <div class="bg-[#f8fafc]">
                    <div class="flex h-16 items-center justify-end gap-6 border-b border-slate-200 bg-white px-6">
                      <div class="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <span class="text-slate-400">⌂</span>
                        <span>Test Company</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">KA</span>
                        <div>
                          <p class="text-sm font-semibold text-slate-950">Admin User</p>
                          <p class="text-xs text-slate-500">Account</p>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-5 p-6">
                      <div>
                        <h3 class="text-[2rem] font-semibold tracking-tight text-slate-950">Dashboard</h3>
                        <p class="mt-1 text-sm text-slate-500">See what needs attention and move into the right queue.</p>
                      </div>

                      <div class="flex gap-2">
                        <span
                          v-for="range in dashboardRanges"
                          :key="range.label"
                          class="rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm"
                          :class="range.active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-600'"
                        >
                          {{ range.label }}
                        </span>
                      </div>

                      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div class="flex items-start justify-between gap-4">
                          <div>
                            <h4 class="text-sm font-semibold text-slate-900">Needs Attention Now</h4>
                            <p class="mt-1 text-xs text-slate-500">Current backlog that should be reviewed first.</p>
                          </div>
                          <p class="text-xs text-slate-500">20 items across active queues</p>
                        </div>

                        <div class="mt-4 grid gap-3 xl:grid-cols-3">
                          <div
                            v-for="item in attentionCards"
                            :key="item.label"
                            class="rounded-2xl border border-rose-200 bg-rose-50/35 p-4"
                          >
                            <div class="flex items-start justify-between gap-3">
                              <p class="text-xs font-bold uppercase tracking-[0.12em] text-rose-600">{{ item.label }}</p>
                            </div>
                            <p class="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{{ item.value }}</p>
                            <p class="mt-3 text-sm text-slate-600">{{ item.copy }}</p>
                          </div>
                        </div>
                      </section>

                      <section class="grid gap-3 xl:grid-cols-4">
                        <div
                          v-for="item in dashboardStats"
                          :key="item.label"
                          class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                        >
                          <p class="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{{ item.label }}</p>
                          <p class="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{{ item.value }}</p>
                          <p class="mt-3 text-sm text-slate-600">{{ item.copy }}</p>
                        </div>
                      </section>

                      <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                          <div>
                            <h4 class="text-sm font-semibold text-slate-900">Activity Trend</h4>
                            <p class="mt-1 text-xs text-slate-500">Conversations, valuations, leads, appointments and imports over time.</p>
                          </div>
                          <div class="flex items-center gap-4 text-xs text-slate-500">
                            <span v-for="item in chartLegend" :key="item.label" class="inline-flex items-center gap-2">
                              <span class="h-2.5 w-2.5 rounded-full" :style="{ backgroundColor: item.color }"></span>
                              {{ item.label }}
                            </span>
                          </div>
                        </div>
                        <div class="h-64 bg-[linear-gradient(180deg,transparent_0%,transparent_92%,rgba(226,232,240,0.8)_92%),repeating-linear-gradient(to_right,transparent_0,transparent_11%,rgba(248,250,252,0.7)_11%,rgba(248,250,252,0.7)_12%)] px-5 py-4">
                          <div class="flex h-full items-end gap-8">
                            <div v-for="bar in chartBars" :key="bar.label" class="flex flex-1 items-end gap-1">
                              <div class="relative flex w-full items-end justify-center gap-[2px]">
                                <span v-for="segment in bar.segments" :key="segment.color + segment.height"
                                  class="w-8 rounded-t-md"
                                  :style="{ height: segment.height, backgroundColor: segment.color }"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="grid gap-4 xl:grid-cols-2">
                        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm">
                          <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                            <div>
                              <h4 class="text-sm font-semibold text-slate-900">Leads Queue</h4>
                              <p class="mt-1 text-xs text-slate-500">Oldest uncontacted leads first.</p>
                            </div>
                            <span class="text-sm font-semibold text-slate-600">View all</span>
                          </div>
                          <div class="divide-y divide-slate-100">
                            <div v-for="item in leadQueue" :key="item.name" class="px-5 py-4">
                              <div class="flex items-start justify-between gap-3">
                                <div>
                                  <p class="text-sm font-semibold text-slate-950">{{ item.name }}</p>
                                  <p class="mt-1 text-sm text-slate-600">{{ item.type }}</p>
                                  <p class="mt-2 text-xs text-slate-500">{{ item.meta }}</p>
                                </div>
                                <span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">{{ item.age }}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm">
                          <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                            <div>
                              <h4 class="text-sm font-semibold text-slate-900">Valuation Queue</h4>
                              <p class="mt-1 text-xs text-slate-500">Queued, running or failed valuations.</p>
                            </div>
                            <span class="text-sm font-semibold text-slate-600">View all</span>
                          </div>
                          <div class="divide-y divide-slate-100">
                            <div v-for="item in valuationQueue" :key="item.title + item.price" class="px-5 py-4">
                              <div class="flex items-start justify-between gap-3">
                                <div>
                                  <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
                                  <p class="mt-1 text-sm text-slate-600">{{ item.status }}</p>
                                  <p class="mt-2 text-xs text-slate-500">{{ item.price }}</p>
                                </div>
                                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{{ item.age }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden gap-6 pt-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <article v-for="(point, index) in dashboardPoints" :key="point.title" class="border-t border-stone-300 pt-5" data-reveal :style="{ '--reveal-delay': `${index * 100}ms` }">
                <h3 class="text-lg font-semibold tracking-tight text-slate-950">{{ point.title }}</h3>
                <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600">{{ point.copy }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="shell section py-12 sm:py-16">
        <div class="mx-auto max-w-4xl text-center">
          <p class="font-serif text-3xl font-medium tracking-tight text-slate-950 sm:text-5xl" data-reveal>
            Turn your existing data into faster, more grounded valuation enquiries.
          </p>
        </div>
      </section>

      <section id="pricing" class="shell section pb-16 pt-4 sm:pb-20 sm:pt-8">
        <div class="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div class="max-w-md" data-reveal>
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Pricing</p>
            <h2 class="font-serif mt-6 text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
              Start small, then scale the workflow.
            </h2>
            <p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Use the test product first, then choose the setup that fits your volume, team size and review process.
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-3">
            <article
              v-for="(plan, index) in pricingPlans"
              :key="plan.name"
              class="rounded-[1.4rem] border border-stone-300/80 bg-white/90 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
              data-reveal
              :style="{ '--reveal-delay': `${index * 90}ms` }"
            >
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">{{ plan.kicker }}</p>
              <h3 class="mt-3 text-xl font-semibold tracking-tight text-slate-950">{{ plan.name }}</h3>
              <p class="mt-3 font-serif text-3xl font-medium tracking-tight text-slate-950">{{ plan.price }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ plan.copy }}</p>
              <ul class="mt-5 space-y-2 text-sm text-slate-600">
                <li v-for="feature in plan.features" :key="feature" class="flex gap-2">
                  <span class="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="shell section py-16 sm:py-20">
        <div class="grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div class="max-w-md" data-reveal>
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Common questions</p>
            <h2 class="font-serif mt-6 text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
              How Zivo works.
            </h2>
          </div>

          <div class="divide-y divide-stone-300/80 border-y border-stone-300/80">
            <article v-for="(item, index) in faqs" :key="item.question" class="grid gap-4 py-6 md:grid-cols-[0.82fr_1.18fr]" data-reveal :style="{ '--reveal-delay': `${index * 90}ms` }">
              <h3 class="text-lg font-semibold tracking-tight text-slate-950">{{ item.question }}</h3>
              <p class="text-sm leading-7 text-slate-600">{{ item.answer }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="final-cta" class="shell section pt-8 sm:pt-10">
        <div class="relative overflow-hidden rounded-[1.75rem] bg-[#171514] px-6 py-10 text-white shadow-soft sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(149,109,77,0.35),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(67,85,63,0.2),transparent_32%)]"></div>
          <div class="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div class="max-w-2xl" data-reveal>
              <p class="text-sm font-medium uppercase tracking-[0.24em] text-white/55">Next step</p>
              <h2 class="font-serif mt-6 text-4xl font-medium tracking-tight text-white sm:text-5xl">
                Choose the path that helps you evaluate it fastest.
              </h2>
              <p class="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
                Review the pricing or jump straight into the product test flow and see how Zivo handles your workflow.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col" data-reveal style="--reveal-delay: 140ms;">
              <a
                href="#pricing"
                class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5"
              >
                View pricing
              </a>
              <a
                :href="testProductUrl"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Test the product
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="shell relative z-10 pb-10 pt-4">
      <div class="flex flex-col gap-4 border-t border-stone-300/80 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p class="max-w-md">© 2026 Zivo. Configurable valuation and review workflows powered by client data.</p>
        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
          <a href="#value" class="transition hover:text-slate-950">Value</a>
          <a href="#product" class="transition hover:text-slate-950">Product</a>
          <a href="#final-cta" class="transition hover:text-slate-950">Demo</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
const dashboardBaseUrl = (import.meta.env.VITE_DASHBOARD_BASE_URL || 'http://app.chatbot-api.local:5173').replace(/\/$/, '')
const testProductUrl = import.meta.env.VITE_TEST_PRODUCT_URL || 'http://127.0.0.1:5175/'

export default {
  name: 'App',
  data() {
    return {
      revealObserver: null,
      navItems: [
        { label: 'Value', href: '#value' },
        { label: 'Workflow', href: '#workflow' },
        { label: 'Product', href: '#product' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      registerUrl: `${dashboardBaseUrl}/register`,
      loginUrl: `${dashboardBaseUrl}/login`,
      testProductUrl,
      chatMessages: [
        {
          role: 'assistant',
          text: 'Do you know the model or reference number?',
          delay: 420,
        },
        {
          role: 'user',
          text: 'Seamaster soccer timer',
          delay: 500,
        },
      ],
      heroSummary: {
        question: 'How old is it? Optional. An approximate year or era is fine.',
        answer: '1980s',
      },
      featureHighlights: [
        {
          kicker: 'Less chasing',
          title: 'Collect better details earlier',
          copy: 'Ask for the right information up front so your team spends less time going back and forth with customers.',
        },
        {
          kicker: 'Faster triage',
          title: 'Spot the enquiries worth reviewing',
          copy: 'Use matches, pricing signals and urgency states to separate stronger enquiries from weaker ones quickly.',
        },
        {
          kicker: 'Grounded estimates',
          title: 'Support staff with pricing context',
          copy: 'Give your team a stronger starting point before they review a case or reply to the customer.',
        },
        {
          kicker: 'Fits your workflow',
          title: 'Run the process your team already uses',
          copy: 'Control prompts, panels, actions and routing so the chatbot supports your existing review process.',
        },
      ],
      valuePoints: [
        {
          title: 'Make answers more consistent',
          copy: 'Give customers a clearer first response without relying on whoever happens to pick up the enquiry.',
        },
        {
          title: 'Save team time',
          copy: 'Collect the key details early so your team spends less time chasing missing information.',
        },
        {
          title: 'Improve lead quality',
          copy: 'Turn casual valuation chats into more qualified enquiries with stronger context attached.',
        },
        {
          title: 'Keep a human in the loop',
          copy: 'Your team still decides when pricing should be reviewed and when a specialist should step in.',
        },
      ],
      flowSteps: [
        {
          number: '01',
          title: 'Connect your business',
          copy: 'Set up your catalog, business details, prompts and workflow rules in one place.',
        },
        {
          number: '02',
          title: 'Guide the customer',
          copy: 'Handle valuation requests, product questions, image matching and lead capture through the chatbot.',
        },
        {
          number: '03',
          title: 'Review and respond',
          copy: 'Your team sees urgent cases, checks the estimate and follows up with the customer.',
        },
      ],
      dashboardNav: [
        { label: 'Dashboard', active: true },
        { label: 'Customers', active: false },
        { label: 'Products', active: false },
        { label: 'Chatbot', active: false },
        { label: 'Team', active: false },
        { label: 'FAQs', active: false },
        { label: 'Settings', active: false },
      ],
      dashboardRanges: [
        { label: 'Today', active: false },
        { label: '7 days', active: true },
        { label: '30 days', active: false },
        { label: 'All time', active: false },
      ],
      attentionCards: [
        {
          label: 'Leads need contact',
          badge: '10 urgent',
          value: '10',
          copy: 'Uncontacted leads waiting for a reply.',
        },
        {
          label: 'Valuations need review',
          badge: '9 urgent',
          value: '9',
          copy: 'Queued, stalled or failed valuations.',
        },
        {
          label: 'Upcoming appointments',
          badge: '1 urgent',
          value: '1',
          copy: 'Bookings scheduled in the next 7 days.',
        },
      ],
      dashboardStats: [
        { label: 'Active conversations', value: '5', copy: 'Live conversations active in this range.' },
        { label: 'Valuations started', value: '6', copy: 'New valuation jobs created in this range.' },
        { label: 'Leads captured', value: '2', copy: 'Customers who left contact details.' },
        { label: 'Appointments booked', value: '5', copy: 'Bookings created from chat or follow-up.' },
      ],
      mobileDashboardNav: [
        { label: 'Customers', active: true },
        { label: 'Products', active: false },
        { label: 'Chatbot', active: false },
      ],
      chartLegend: [
        { label: 'Conversations', color: '#0f172a' },
        { label: 'Valuations', color: '#2563eb' },
        { label: 'Leads', color: '#0f766e' },
        { label: 'Appointments', color: '#f59e0b' },
        { label: 'Imports', color: '#7c3aed' },
      ],
      chartBars: [
        {
          label: '2026-06-14',
          segments: [
            { color: '#2563eb', height: '4rem' },
            { color: '#f59e0b', height: '4rem' },
          ],
        },
        {
          label: '2026-06-15',
          segments: [
            { color: '#2563eb', height: '6rem' },
            { color: '#f59e0b', height: '4rem' },
          ],
        },
        {
          label: '2026-06-18',
          segments: [
            { color: '#0f172a', height: '2rem' },
          ],
        },
        {
          label: '2026-06-20',
          segments: [
            { color: '#0f172a', height: '6rem' },
            { color: '#2563eb', height: '2rem' },
            { color: '#0f766e', height: '4rem' },
            { color: '#f59e0b', height: '2rem' },
          ],
        },
      ],
      leadQueue: [
        { name: 'Demo Lead 10', type: 'In-Person Valuation', meta: 'Wants same-week visit', age: '3 weeks ago' },
        { name: 'Demo Lead 5', type: 'Expert Review', meta: 'Photos uploaded and awaiting reply', age: '2 weeks ago' },
        { name: 'Logan Roy', type: 'Expert Review', meta: 'High-value watch enquiry', age: '2 weeks ago' },
        { name: 'Rom Roy', type: 'Expert Review', meta: 'Customer requested follow-up call', age: '1 week ago' },
        { name: 'Nion Tay', type: 'Valuation', meta: 'Needs estimate confirmed by team', age: '1 week ago' },
      ],
      valuationQueue: [
        { title: 'Demo Maker', status: 'Ready for review', price: '£130.00', age: '2 weeks ago' },
        { title: 'Demo Maker', status: 'Awaiting specialist check', price: '£145.00', age: '2 weeks ago' },
        { title: 'Demo Maker', status: 'Queued', price: '£160.00', age: '2 weeks ago' },
        { title: 'Cartier Panthère Jewelry', status: 'Needs more detail', price: 'No estimate yet', age: '1 week ago' },
      ],
      dashboardPoints: [
        {
          title: 'Lead review',
          copy: 'Open each enquiry with the full conversation and see which leads need a reply first.',
        },
        {
          title: 'Product suggestions',
          copy: 'Check image-based matches, compare alternatives and confirm the closest product before saving.',
        },
        {
          title: 'Estimate review',
          copy: 'See the pricing signals behind each estimate before your team sends the final response.',
        },
      ],
      faqs: [
        {
          question: 'What does Zivo use to generate responses?',
          answer: 'Zivo uses the business details, catalog data and workflow settings you configure instead of relying on generic answers alone.',
        },
        {
          question: 'Can my team control what the assistant says?',
          answer: 'Yes. Your team controls tone, workflow rules, escalation conditions and response boundaries.',
        },
        {
          question: 'Where does human review fit in?',
          answer: 'Routine cases can move faster, while unclear or higher-stakes valuations can still be reviewed by your team before they go further.',
        },
      ],
      pricingPlans: [
        {
          kicker: 'Test first',
          name: 'Starter',
          price: 'From £99/mo',
          copy: 'A lightweight setup for early teams validating the workflow.',
          features: ['Chatbot widget', 'Core valuation flow', 'Basic queue visibility'],
        },
        {
          kicker: 'Most common',
          name: 'Growth',
          price: 'From £249/mo',
          copy: 'For businesses using Zivo to qualify and route valuation enquiries day to day.',
          features: ['Image matching', 'Grounded estimates', 'Team dashboard and triage'],
        },
        {
          kicker: 'Custom',
          name: 'Enterprise',
          price: 'Custom',
          copy: 'For higher-volume teams needing tailored onboarding, controls and support.',
          features: ['Custom workflow design', 'Advanced permissions', 'Priority support'],
        },
      ],
    }
  },
  mounted() {
    this.setupRevealAnimations()
  },
  beforeUnmount() {
    if (this.revealObserver) {
      this.revealObserver.disconnect()
    }
  },
  methods: {
    setupRevealAnimations() {
      const elements = this.$el.querySelectorAll('[data-reveal]')
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReducedMotion) {
        elements.forEach((element) => element.classList.add('is-visible'))
        return
      }

      this.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              this.revealObserver.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        },
      )

      elements.forEach((element) => this.revealObserver.observe(element))
    },
  },
}
</script>
