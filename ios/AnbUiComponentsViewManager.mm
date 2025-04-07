#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface AnbUiComponentsViewManager : RCTViewManager
@end

@implementation AnbUiComponentsViewManager

RCT_EXPORT_MODULE(AnbUiComponentsView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
