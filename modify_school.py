with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()
if "BrightFuture School. Developed by Nova Digital" in content:
    print("Write success")
else:
    print("Write failed")
