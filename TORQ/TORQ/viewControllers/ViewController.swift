//
//  ViewController.swift
//  TORQ
//
//  Created by Noura Alsulayfih on 28/09/2021.
//

import UIKit
import CoreLocation
import SwiftUI

class ViewController: UIViewController {
    
    //MARK:- Variables
    var locationManager = CLLocationManager()
    
    
    
    //MARK:- @IBOutelts
    
    @IBOutlet weak var containerView: UIView!

    
    //MARK:- @Overriden Functions
    
    
    
    override func viewDidAppear(_ animated: Bool) {
        connectToUI()
    }


    override func viewDidLoad() {
        super.viewDidLoad()
        locationManager.delegate = self
        guard CLLocationManager.locationServicesEnabled() else {
            // let the user know
            return
        }
        locationManager.allowsBackgroundLocationUpdates = true
        locationManager.showsBackgroundLocationIndicator = true
//        locationManager.requestAlwaysAuthorization()
    }
    
    
    //MARK:- Functions
    
    func connectToUI(){
        let launchView = UIHostingController(rootView: LaunchScreen())
        addChild(launchView)
        launchView.view.frame = containerView.bounds
        containerView.addSubview(launchView.view)
    }
    
    //MARK:- @IBActions


}

    //MARK:- Extension

extension ViewController: CLLocationManagerDelegate{
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        print(locations)
    }
    
    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        let authStatus = CLLocationManager.authorizationStatus()
        switch authStatus {
        case .authorizedAlways:
            print("authorizedAlways")
            locationManager.startUpdatingLocation()
        case .authorizedWhenInUse:
            print("authorizedWhenInUse")
            locationManager.startUpdatingLocation()
        case .denied:
            print("denied")
        case .notDetermined:
            print("notDetermined")
        case .restricted:
            print("restricted")
        default:
            print("unknown")
        }
    }
    
    
    
}




