//
//  LaunchScreen.swift
//  TORQ
//
//  Created by Noura Alsulayfih on 30/09/2021.
//

import SwiftUI

struct LaunchScreen: View {
    
    @State var flag = false
    @State var endingFlag = false
    var body: some View {
        ZStack{
            Color("white")
            Image("Icon")
                .resizable()
                .renderingMode(.original)
                .aspectRatio(contentMode: flag ? .fill : .fit)
                .frame(width: flag ? nil :250, height: flag ? nil :250, alignment: .center)
                .scaleEffect(flag ? 4 : 1)
                .frame(width: UIScreen.main.bounds.width)
        }
//        .ignoresSafeArea(.all, edges: .all)
        .onAppear(perform: {
            animateLogo()
        })
        .opacity(endingFlag ? 0: 1)
        
        
        
        
    }
    
    func animateLogo(){
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.45) {
            withAnimation(Animation.easeOut(duration: 0.55)){
                flag.toggle()
            }
            
            withAnimation(Animation.linear(duration: 0.45)){
                endingFlag.toggle()
            }
        }
    }
}

struct LaunchScreen_Previews: PreviewProvider {
    static var previews: some View {
        LaunchScreen()
    }
}
