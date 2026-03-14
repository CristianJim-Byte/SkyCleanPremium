from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    # Load the page
    html_path = "file:///sessions/dreamy-serene-bohr/mnt/SkyCleanPremium/index.html"
    page.goto(html_path, wait_until="load")
    page.wait_for_timeout(6000)  # Wait for preloader

    # Screenshot hero area
    page.screenshot(path="/tmp/01-hero.png")

    # Scroll to services section slowly
    page.evaluate("window.scrollTo(0, 800)")
    page.wait_for_timeout(500)
    page.screenshot(path="/tmp/02-pre-services.png")

    page.evaluate("window.scrollTo(0, 1200)")
    page.wait_for_timeout(500)
    page.screenshot(path="/tmp/03-services.png")

    # Check what resources are heaviest
    perf_data = page.evaluate("""
    () => {
        const entries = performance.getEntriesByType('resource');
        const heavy = entries
            .filter(e => e.transferSize > 100000)
            .map(e => ({
                name: e.name.split('/').pop(),
                size: Math.round(e.transferSize / 1024) + 'KB',
                duration: Math.round(e.duration) + 'ms',
                type: e.initiatorType
            }))
            .sort((a,b) => parseInt(b.size) - parseInt(a.size));
        return heavy;
    }
    """)

    print("=== HEAVY RESOURCES ===")
    for r in perf_data:
        print(f"  {r['size'].rjust(10)}  {r['duration'].rjust(8)}  {r['type'].ljust(6)}  {r['name'][:60]}")

    # Check if videos are autoplaying
    video_info = page.evaluate("""
    () => {
        const videos = document.querySelectorAll('video');
        return Array.from(videos).map(v => ({
            src: v.querySelector('source')?.src?.split('/').pop() || 'none',
            paused: v.paused,
            readyState: v.readyState,
            autoplay: v.autoplay,
            preload: v.preload
        }));
    }
    """)

    print("\n=== VIDEOS ===")
    for v in video_info:
        print(f"  {v['src']}: paused={v['paused']}, readyState={v['readyState']}, autoplay={v['autoplay']}, preload={v['preload']}")

    # Check total image weight
    img_info = page.evaluate("""
    () => {
        const imgs = document.querySelectorAll('img[src]');
        return Array.from(imgs).map(i => ({
            src: i.src.split('/').pop(),
            loading: i.loading || 'eager',
            naturalWidth: i.naturalWidth,
            complete: i.complete
        }));
    }
    """)

    print("\n=== IMAGES ===")
    for i in img_info:
        status = "loaded" if i['complete'] else "pending"
        print(f"  [{status}] {i['loading'].ljust(5)} {i['naturalWidth']}px  {i['src'][:55]}")

    # Scroll performance test
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(200)

    fps_data = page.evaluate("""
    () => new Promise(resolve => {
        let frames = [];
        let lastTime = performance.now();
        let scrollY = 0;
        const step = 5;
        const maxScroll = 3000;

        function tick() {
            const now = performance.now();
            frames.push(now - lastTime);
            lastTime = now;
            scrollY += step;
            window.scrollTo(0, scrollY);
            if (scrollY < maxScroll) {
                requestAnimationFrame(tick);
            } else {
                const avg = frames.reduce((a,b) => a+b, 0) / frames.length;
                const fps = Math.round(1000 / avg);
                const jank = frames.filter(f => f > 33).length;
                resolve({ avgFPS: fps, jankFrames: jank, totalFrames: frames.length });
            }
        }
        requestAnimationFrame(tick);
    })
    """)

    print(f"\n=== SCROLL PERFORMANCE ===")
    print(f"  Avg FPS: {fps_data['avgFPS']}")
    print(f"  Jank frames (>33ms): {fps_data['jankFrames']} / {fps_data['totalFrames']}")

    browser.close()
