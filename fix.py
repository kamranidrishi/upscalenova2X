with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()

content = content.replace('''          </section>

          {/* 11 & 15. ADMISSION SECTION / FINAL CTA */}''', '''          </section>
          )}

          {/* 11 & 15. ADMISSION SECTION / FINAL CTA */}''')

with open('src/components/SchoolDemo.tsx', 'w') as f:
    f.write(content)
